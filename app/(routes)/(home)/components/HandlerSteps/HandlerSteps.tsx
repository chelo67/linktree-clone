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
import { Progress} from "@/components/ui/progress";

export function HandlerSteps(props: HandlerStepsProps) {
  const { onReload } = props;

  const [openDialog, setOpenDialog] = useState(true);

  const {totalSteps, step, setStep} = useStepConfig();

  const progressValue = (step / totalSteps) * 100;

  const onCloseDialog = () => {
    setOpenDialog(false);
    onReload(true);
  }

  return (
    <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {step > 1 && step < 5 && (
                <Button
                    variant="outline"
                    className="mr-2"
                    onClick={() => {}}
                >
                    Back <ArrowLeft />
                </Button>
            )}

            <div className="mb-2 text-center">
                step {step} of {totalSteps}
            </div>

            <Progress value={progressValue} />
            
          </AlertDialogTitle>
          <AlertDialogDescription>
            {step === 1 && (<p>Step one</p>)}
            {step === 2 && (<p>Step two</p>)}
            {step === 3 && (<p>Step three</p>)}
            {step === 4 && (<p>Step four</p>)}
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
