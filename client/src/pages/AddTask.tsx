import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import axios from "axios";
import { useTaskStore } from "@/store/useTaskStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const formSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters.")
    .max(50, "Title must be at most 50 characters.")
    .transform((val) => val.trim().replace(/\s+/g, " ")),
  description: z
    .string()
    .max(200, "Description must be at most 200 characters.")
    .transform((val) => val.trim().replace(/\s+/g, " ")),
});

const AddTask = () => {
  const { createTask } = useTaskStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await createTask(data);
      toast.success("Task created successfully!", {
        position: "top-center",
      });

      form.reset();
    } catch (error) {
      console.error("Task creation failed:", error);
      // Check if it's an Axios error to access server response
      if (axios.isAxiosError(error)) {
        const serverMessage = error.response?.data?.message;
        toast.error(serverMessage || "Failed to create task");
      } else if (error instanceof Error) {
        // Handle standard JS errors
        toast.error(error.message);
      } else {
        // Fallback for weird edge cases
        toast.error("An unexpected error occurred");
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full sm:max-w-md">
        <CardContent>
          <form
            id="form-rhf-demo"
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
          >
            <FieldGroup>
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">Title</FieldLabel>
                    <Input
                      {...field}
                      onBlur={(e) =>
                        field.onChange(
                          e.target.value.trim().replace(/\s+/g, " "),
                        )
                      }
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-description">
                      Description
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        onBlur={(e) =>
                          field.onChange(
                            e.target.value.trim().replace(/\s+/g, " "),
                          )
                        }
                        id="form-rhf-demo-description"
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={fieldState.invalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.value.trim().length}/200 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button type="submit" form="form-rhf-demo">
              Add task
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddTask;
