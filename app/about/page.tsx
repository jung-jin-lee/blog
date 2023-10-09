import Link from 'next/link';
import SocialIcon from '@/components/SocialIcon';
import { getMainAuthor } from '@/sanity/groq/author';

async function AboutPage() {
  const mainAuthor = await getMainAuthor();
  const { name, description, github } = mainAuthor;

  return (
    <div className="max-w-xl mx-auto p-8">
      <div className="flex flex-col gap-4">
        <div className="text-3xl font-bold flex flex-row items-center gap-2">
          {name}{' '}
          <Link href={github} target="_blank">
            <SocialIcon kind="github" width={24} height={24} />
          </Link>
        </div>
        <div className="whitespace-pre-line">{description}</div>
      </div>
    </div>
  );
}

export default AboutPage;
