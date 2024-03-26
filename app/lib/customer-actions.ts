'use server';

export async function createCustomer(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
  };
  // Test it out:
  console.log(rawFormData);
}
