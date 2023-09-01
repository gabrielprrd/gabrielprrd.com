import {
  type ContactData,
  contactFormSchema,
} from "@/models/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import Toast from "@/components/Toast";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";

const FORM_SUBMIT_HASH = "aeff163b8996ff808cd5ba47dcf6de7a";
const formSubmitEndpoint = `https://formsubmit.co/ajax/${FORM_SUBMIT_HASH}`;

export default function useContactForm() {
  const { t } = useTranslation();
  const toast = useToast({ position: "bottom-right", duration: 6000 });
  const createContactForm = useForm<ContactData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    getValues,
    reset: resetFormValues,
  } = createContactForm;

  async function sendEmail() {
    const formValues = getValues();
    try {
      await axios.post(formSubmitEndpoint, { ...formValues });

      toast({
        render: () => (
          <Toast>
            <Heading size="sm">
              {t("common.toasts.sendMessageSuccess.heading")}
            </Heading>
            <Text>{t("common.toasts.sendMessageSuccess.description")}</Text>
          </Toast>
        ),
      });
      resetFormValues();
    } catch (err) {
      toast({
        render: () => (
          <Toast borderColor="tomato">
            <Heading size="sm">
              {t("common.toasts.sendMessageError.heading")}
            </Heading>
            <Text>{t("common.toasts.sendMessageError.heading")}</Text>
          </Toast>
        ),
      });
    }
  }

  return {
    sendEmail,
    createContactForm,
    handleSubmit,
    isSubmitting,
    errors,
  };
}
