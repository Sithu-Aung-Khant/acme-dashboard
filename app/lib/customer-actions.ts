'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  image_url: z.string().optional(),
});

const CreateCustomer = FormSchema.omit({ id: true });

export async function createCustomer(formData: FormData) {
  const validatedFields = CreateCustomer.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    image_url: formData.get('image_url') || '/customers/emil-kowalski.png',
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Customer.',
    };
  }
  // Prepare data for insertion into the database
  const { name, email, image_url } = validatedFields.data;

  try {
    await sql`
          INSERT INTO customers (name, email, image_url)
          VALUES (${name}, ${email}, ${image_url})  `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  console.log('Customer added successfully');

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}
