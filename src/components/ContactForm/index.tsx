import { FormProvider } from "react-hook-form";
import { Form } from "../Form";
import {
  SimpleGrid,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import BorderBottomButton from "../BorderBottomButton";
import { useTranslation } from "next-i18next";
import useContactForm from "./hooks/useContactForm";

export default function ContactForm() {
  const { t } = useTranslation();
  const { sendEmail, createContactForm, handleSubmit, isSubmitting, errors } =
    useContactForm();

  const defaultInputBorderColor = useColorModeValue("black", "white");

  function handleInputBorderColor(field: string) {
    return !!errors[field] ? "tomato" : defaultInputBorderColor;
  }

  return (
    <FormProvider {...createContactForm}>
      <SimpleGrid
        id="contact-section"
        as={chakra.form}
        columns={1}
        alignItems="flex-end"
        onSubmit={handleSubmit(sendEmail)}
      >
        <Form.Field>
          <Form.Input
            name="name"
            id="name"
            placeholder={t("common.forms.input.name.label")}
            borderBottomColor={handleInputBorderColor("name")}
          />
          <VisuallyHidden>
            <Form.Label htmlFor="name">
              {t("common.forms.input.name.label")}
            </Form.Label>
          </VisuallyHidden>
          <Form.ErrorMessage field="name" />
        </Form.Field>

        <Form.Field>
          <Form.Input
            name="email"
            id="email"
            border="none"
            placeholder={t("common.forms.input.email.label")}
            borderBottomColor={handleInputBorderColor("email")}
          />
          <VisuallyHidden>
            <Form.Label htmlFor="email">
              {t("common.forms.input.email.label")}
            </Form.Label>
          </VisuallyHidden>
          <Form.ErrorMessage field="email" />
        </Form.Field>

        <Form.Field>
          <VisuallyHidden>
            <Form.Label htmlFor="message">
              {t("common.forms.input.message.label")}
            </Form.Label>
          </VisuallyHidden>
          <Form.TextArea
            name="message"
            id="message"
            placeholder={t("common.forms.input.message.label")}
            borderBottomColor={handleInputBorderColor("message")}
          />
          <Form.ErrorMessage field="message" />
        </Form.Field>

        <BorderBottomButton
          aria-label="Send message"
          type="submit"
          zIndex={10}
          justifySelf="flex-end"
          mt={12}
        >
          {isSubmitting
            ? t("common.forms.buttons.sending")
            : t("common.forms.buttons.sendMessage")}
        </BorderBottomButton>
      </SimpleGrid>
    </FormProvider>
  );
}
