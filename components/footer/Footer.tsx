const footerData = {
  heading: 'Crossroads Shipping ',
  email: {
    label: 'contact@crossroadsshipping.org',
  },
  phone: {
    label: '(913)-999-5401',
  },
  address: {
    label: '9157 Whiskey Bottom Rd, Laurel MD 20723',
  },
};

interface Footer24Props {
  className?: string;
}

const Footer = ({ className }: Footer24Props) => {
  return (
    <section>
      <div className='container px-4 md:px-24'>
        <div className='rounded-t bg-primary p-8 md:p-8'>
          <div className='mb-2 border-b border-border pb-6 text-left md:mb-4 md:pb-8 md:text-center'>
            <h1 className='text-2xl  font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center'>
              {footerData.heading}
            </h1>
          </div>

          <div className='mb-12 flex flex-col gap-8 md:mb-10 lg:flex-row lg:justify-between lg:gap-4 xl:gap-8'>
            {/* Email Section */}
            <div className='flex flex-col items-start gap-4 '>
              <h3 className='text-sm font-medium tracking-wide  uppercase text-secondary'>
                Email
              </h3>
              <h2>{footerData.email.label}</h2>
            </div>

            {/* Social Links Section */}
            <div className='flex flex-col items-start gap-4'>
              <h3 className='text-sm font-medium tracking-wide text-secondary uppercase'>
                WareHouse
              </h3>
              <h2>{footerData.address.label}</h2>
            </div>

            {/* Phone Section */}
            <div className='flex flex-col items-start gap-4'>
              <h3 className='text-sm font-medium tracking-wide text-secondary uppercase'>
                Phone
              </h3>
              <h2>{footerData.phone.label}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
