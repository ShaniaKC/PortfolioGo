import Image from "next/image";
import { ProjectsHeader } from "../components/Headers";
import { BlackButton } from "../components/Buttons";
import MediaContent from "../components/MediaContent";
import { MultiPills } from "../components/Pills";

const projects = () => {
  return (
    <>
      <ProjectsHeader />
      <MediaContent
        customClassName="column"
        heading="Ogosam Company Website"
        content={
          <>
            <p>
              Is having a website necessary for your business? Well, you are
              here, so you must think so. <br />
              Over a short chat conversation I should be able to help you
              decide. For free of course.
            </p>{" "}
            <p>
              {" "}
              I won't try to pitch you my business, I will only help you
              understand what it is that your business needs right now. if it's
              a website, better for me and you
            </p>
            <MultiPills
              contentArray={["HTML", "SCSS", "JavaScript", "NodeJs"]}
            />
            <BlackButton>Let's Talk</BlackButton>
          </>
        }
        media={
          <div>
            <Image
              src="/images/Circular food.jpg"
              alt=""
              width="400"
              height="300"
            />
          </div>
        }
      />

      <MediaContent
        customClassName="column"
        heading="Anthony Author Website"
        content={
          <>
            <p>
              Is having a website necessary for your business? Well, you are
              here, so you must think so. <br />
              Over a short chat conversation I should be able to help you
              decide. For free of course.
            </p>{" "}
            <p>
              {" "}
              I won't try to pitch you my business, I will only help you
              understand what it is that your business needs right now. if it's
              a website, better for me and you
            </p>
            <MultiPills
              contentArray={["HTML", "SCSS", "JavaScript", "NodeJs"]}
            />
            <BlackButton>Let's Talk</BlackButton>
          </>
        }
        media={
          <div>
            <Image
              src="/images/Circular food.jpg"
              alt=""
              width="400"
              height="300"
            />
          </div>
        }
      />

      <MediaContent
        customClassName="column"
        heading="Fickle Job Finder Application "
        content={
          <>
            <p>
              Is having a website necessary for your business? Well, you are
              here, so you must think so. <br />
              Over a short chat conversation I should be able to help you
              decide. For free of course.
            </p>{" "}
            <p>
              {" "}
              I won't try to pitch you my business, I will only help you
              understand what it is that your business needs right now. if it's
              a website, better for me and you
            </p>
            <MultiPills
              contentArray={[
                "React",
                "SCSS",
                "Redux",
                "NodeJs",
                "firebase",
                "Framer Motion",
              ]}
            />
            <BlackButton>Let's Talk</BlackButton>
          </>
        }
        media={
          <div>
            <Image
              src="/images/Circular food.jpg"
              alt=""
              width="400"
              height="300"
            />
          </div>
        }
      />
    </>
  );
};

export default projects;
