import { useState } from "react";
import { HandlerStepsProps } from "./HandlerSteps.types";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useStepConfig } from "@/hooks/useStepConfig";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { StepOne } from "../StepOne";
import { StepTwo } from "../StepTwo";


export function HandlerSteps(props: HandlerStepsProps) {
  const { onReload } = props;

  const [openDialog, setOpenDialog] = useState(true);

  const { totalSteps, step, setStep, nextStep, prevStep} = useStepConfig();

  const progressValue = (step / totalSteps) * 100;

  const onCloseDialog = () => {
    setOpenDialog(false);
    onReload(true);
  };

  return (
    <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {step > 1 && step < 5 && (
              <Button variant="outline" className="mr-2" onClick={prevStep}>
                Back <ArrowLeft />
              </Button>
            )}

            <div className="mb-2 text-center">
              step {step} of {totalSteps}
            </div>

            <Progress value={progressValue} />
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              {/* <Button onClick={() => nextStep()}>Next Step</Button> */}
              {step === 1 && <StepOne />}
              {step === 2 && <StepTwo />}
              {step === 3 && <p>Step three</p>}
              {step === 4 && <p>Step four</p>}
              {step === 5 && <p>Step five</p>}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
