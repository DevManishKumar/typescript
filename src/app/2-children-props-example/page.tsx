import Child from "@/components/childrenParent/Child";
import Parent from "@/components/childrenParent/Parent";
import SecondChild from "@/components/childrenParent/SecondChild";

const page = () => {
  return (
    <div>
      <Parent>
        <SecondChild />
      </Parent>
    </div>
  );
};
export default page;
