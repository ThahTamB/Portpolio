/** @jsxImportSource @emotion/react */
import { ReactComponent as Github } from '../assets/images/github.svg';
import { ReactComponent as ExternalLink } from '../assets/images/external-link.svg';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import tw from 'twin.macro';

interface ProjectItemProps {
  data: any;
  variant?: 'left' | 'right';
}

const ProjectItem = ({ data, variant }: ProjectItemProps) => {
  const { name, image, tags, links, description } = data?.fields;
  const {
    title: imageTitle,
    file: { url: imageUrl },
  } = image?.fields;

  const imageStyle = variant === 'left' ? tw`laptop:left-0` : tw`laptop:right-0`;
  const contentStyle = variant === 'left' ? tw`laptop:items-end` : tw`laptop:items-start`;

  return (

    <div css={tw`relative w-full mb-[30px]`}>
      <div
        className="project-image"
        css={[
          tw` overflow-hidden flex justify-center  h-[400px] laptop:(absolute top-0 w-[460px] h-[291px]) `,
          imageStyle,
        ]}
      >
        <img css={tw`h-full max-w-[none] rounded-md`} src={imageUrl} alt={imageTitle} />
      </div>
      <div
        css={[
          tw`absolute p-[25px] pb-5 inset-0 bg-navy/90 shadow-lg top-0 laptop:(w-[content] relative flex flex-col)`,
          contentStyle,
        ]}
      >
        <p css={tw`!text-blue !text-sm !font-mono !my-[10px]`}>Featured Project</p>
        <h3>
          {name}
        </h3>
        <div css={tw` laptop:(w-[400px] px-4 py-4 bg-navy-light rounded-md z-20)`}>
          <p css={tw`laptop:(text-right text-justify !text-lg)`}>
            {documentToReactComponents(description)}
          </p>
        </div>
        <ul css={tw`flex gap-x-6 mt-[15px] mb-[15px] laptop:(mt-6 mb-[15px])`}>
          {tags.map((tag: any) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div css={tw`flex text-slate-lightest text-xl gap-x-5`}>
          {links.map((link: any) => (
            <a key={link.name} href={link.url} title={link.name} target="_blank" rel="noreferrer">
              {link.name === 'github' ? <Github /> : <ExternalLink />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
