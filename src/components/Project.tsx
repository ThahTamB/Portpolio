/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import ProjectItem from './ProjectItem';

interface ProjectProps {
  data: any[];
}

const Project = (props: ProjectProps) => {
  const { data } = props;
  console.log(data);

  return (
    <div id={'Projects'} css={tw`py-24`}>
      <h2 className="customHeading">Some Things I've Built</h2>
      <div css={tw`grid grid-cols-1 md:grid-cols-2 gap-8`}>
      {data.map((item, index) => {
        return <ProjectItem key={item.name} data={item} variant={index % 2 ? 'right' : 'left'} />;
      })}
      </div>
    </div>
  );
};

export default Project;
