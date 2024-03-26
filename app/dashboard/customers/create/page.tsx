import Form from '@/app/ui/customers/create-customer';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create New',
            href: '/dashboard/customer/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
