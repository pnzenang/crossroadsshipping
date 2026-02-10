import { Separator } from '@/components/ui/separator';

function SectionTitle({
  text,
  detail1,
  detail2,
  detail3,
  detail4,
}: {
  text: string;
  detail1?: string;
  detail2?: string;
  detail3?: string;
  detail4?: string;
}) {
  return (
    <div className='pt-32'>
      <h2 className=' text-2xl md:text-6xl font-bold tracking-wider capitalize mb-2 text-center'>
        {text}
      </h2>
      <p className='text-muted-foreground'>{detail1}</p>
      <p className='text-muted-foreground'>{detail2}</p>
      <p className='text-muted-foreground'>{detail3}</p>
      <p className='text-muted-foreground mb-4'>{detail4}</p>
      <Separator />
    </div>
  );
}
export default SectionTitle;
