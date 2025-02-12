import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";

export function StepTwo() {

    const {setInfoUser, infoUser, nextStep} = useStepConfig();
  return (
    <div>
        <h2 className="text-center font-semibold text-2xl">Wich platform are you on?</h2>

        <p className="text-center">Pickup the ones you are on</p>

        <div>
            <p>van los iconos</p>
        </div>

        <div className="mt-6">
            <Button className="w-full bg-purple-600">Continue</Button>
        </div>
    </div>
  )
}
