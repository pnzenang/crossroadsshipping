import { Mail, MapPin, MessageCircle, Phone, Globe, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionTitle from '@/components/global/SectionTitle';

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
  className?: string;
}

const Contact7 = ({
  title = 'Contact Us',
  description = 'We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!.',
  emailLabel = 'Email',
  emailDescription = 'We respond to all emails within 48 hours.',
  email = 'contact@crossshipping.org',
  officeLabel = 'Warehouse',
  officeDescription = 'Drop by our office for a chat.',
  officeAddress = '9157 Whiskey Bottom Rd, Laurel MD 20723  ',
  phoneLabel = 'Phone',
  phoneDescription = "We're available everyday, 9am-5pm.",
  phone = '(913)-999-5401',
  chatLabel = 'Whatsapp Channel',
  chatDescription = 'Get instant update about your shipment.',
  chatLink = 'Start Viewing',
  className,
}: Contact7Props) => {
  return (
    <section className={cn('bg-background ', className)}>
      <div className='container'>
        <div className='flex mb-14  flex-col items-center'>
          <SectionTitle text={title} />
          <p className='max-w-xl text-lg text-muted-foreground text-center'>
            {description}
          </p>
        </div>
        <div className='grid gap-6 md:grid-cols-2'>
          <div className='rounded-lg bg-muted p-6'>
            <span className='mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent'>
              <Mail className='h-6 w-auto' />
            </span>
            <p className='mb-2 text-lg font-semibold'>{emailLabel}</p>
            <p className='mb-3 text-muted-foreground'>{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className='font-semibold hover:underline text-primary'
            >
              {email}
            </a>
          </div>
          <div className='rounded-lg bg-muted p-6'>
            <span className='mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent'>
              <MapPin className='h-6 w-auto' />
            </span>
            <p className='mb-2 text-lg font-semibold'>{officeLabel}</p>
            <p className='mb-3 text-muted-foreground'>{officeDescription}</p>
            <a href='#' className='font-semibold hover:underline text-primary'>
              {officeAddress}
            </a>
          </div>
          <div className='rounded-lg bg-muted p-6'>
            <span className='mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent'>
              <Phone className='h-6 w-auto' />
            </span>
            <p className='mb-2 text-lg font-semibold'>{phoneLabel}</p>
            <p className='mb-3 text-muted-foreground'>{phoneDescription}</p>
            <a
              href={`tel:${phone}`}
              className='font-semibold hover:underline text-primary'
            >
              {phone}
            </a>
          </div>
          <div className='rounded-lg bg-muted p-6'>
            <span className='mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent'>
              <Eye className='h-6 w-auto' />
            </span>
            <p className='mb-2 text-lg font-semibold'>{chatLabel}</p>
            <p className='mb-3  text-muted-foreground'>{chatDescription}</p>
            <a href='#' className='font-semibold hover:underline text-primary'>
              {chatLink}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact7;
