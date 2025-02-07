import { Button } from "@/components/ui/button";
import { dataCreator } from "./StepOne.data";
import { useStepConfig } from "@/hooks/useStepConfig";

interface InfoUser {
    typeUser: string;
}


export function StepOne() {

    const {setInfoUser, nextStep} = useStepConfig();

    const handleClick = (value: string) => {
        // nextStep()

        setInfoUser((prevInfoUser: InfoUser) => ({
            ...prevInfoUser,
            typeUser: value
        }))
    }

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Tell us about yourself
      </h2>
      <p className="text-center">This help us personalize your experience</p>

      <div className="grid grid-cols-1 gap-2 mt-4">
        {dataCreator.map((data) => {
            return (
                <div 
                    key={data.title}
                    className="flex flex-col rounded-full border py-3 hover:bg-gray-300 
                    transition-all duration-300 cursor-pointer text-center"
                    onClick={() => handleClick(data.value)}
                >
                    {data.title}
                </div>
            );
        })}
      </div>

      <div className="mt-6 ">
        <Button className="w-full bg-purple-600" onClick={nextStep}>
            Continue
        </Button>
      </div>
    </div>
  );
}
