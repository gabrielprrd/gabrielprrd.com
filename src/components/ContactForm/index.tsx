import {
  type ContactData,
  contactFormSchema,
} from "@/models/contactFormSchema";
import { FaExclamationCircle } from "react-icons/fa";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "../Form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Flex,
  SimpleGrid,
  Icon,
  useColorModeValue,
  useToast,
  Heading,
  Text,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import axios from "axios";
import Toast from "../Toast";
import BorderBottomButton from "../BorderBottomButton";
import { useTranslation } from "next-i18next";

const FORM_SUBMIT_HASH = "aeff163b8996ff808cd5ba47dcf6de7a";
const formSubmitEndpoint = `https://formsubmit.co/ajax/${FORM_SUBMIT_HASH}`;

export default function ContactForm() {
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
    watch,
    getValues,
    reset: resetFormValues,
  } = createContactForm;

  const watchName = watch("name");
  const watchEmail = watch("email");
  const watchMessage = watch("message");

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
        <Form.Field w="full" display="flex" flexDir="column">
          <Box w="full" position="relative" display="flex" h="45px">
            <Form.Input
              name="name"
              id="name"
              position="absolute"
              left={0}
              border="none"
              borderRadius={0}
              borderBottom="1px"
              borderBottomColor={handleInputBorderColor("name")}
              _focus={{ borderBottomColor: "green" }}
              _hover={{ borderBottom: "2px" }}
              pr={10}
            />
            <Form.Label
              htmlFor="name"
              position="absolute"
              left={3}
              top="20%"
              opacity={0.6}
              display={watchName ? "none" : "block"}
            >
              {t("common.forms.input.name.label")}
            </Form.Label>
            {!!errors.name && (
              <Icon
                as={FaExclamationCircle}
                height={4}
                w="auto"
                position="absolute"
                right={2}
                color="tomato"
                top={3}
              />
            )}
          </Box>

          <Box h="30px">
            <Form.ErrorMessage field="name" />
          </Box>
        </Form.Field>

        <Form.Field w="full" display="flex" flexDir="column">
          <Box w="full" position="relative" display="flex" h="45px">
            <Form.Input
              name="email"
              id="email"
              position="absolute"
              left={0}
              border="none"
              borderRadius={0}
              borderBottom="1px"
              borderBottomColor={handleInputBorderColor("email")}
              _focus={{ borderBottomColor: "green" }}
              _hover={{ borderBottom: "2px" }}
              pr={10}
            />
            <Form.Label
              htmlFor="email"
              position="absolute"
              left={3}
              top="20%"
              opacity={0.6}
              display={watchEmail ? "none" : "block"}
            >
              {t("common.forms.input.email.label")}
            </Form.Label>
            {!!errors.email && (
              <Icon
                as={FaExclamationCircle}
                height={4}
                w="auto"
                position="absolute"
                right={2}
                color="tomato"
                top={3}
              />
            )}
          </Box>

          <Box h="30px">
            <Form.ErrorMessage field="email" />
          </Box>
        </Form.Field>

        <Form.Field w="full" display="flex" flexDir="column">
          <Box w="full" position="relative" display="flex" h="45px">
            <Form.TextArea
              name="message"
              id="message"
              position="absolute"
              left={0}
              border="none"
              borderRadius={0}
              borderBottom="1px"
              borderBottomColor={handleInputBorderColor("message")}
              _focus={{ borderBottomColor: "green" }}
              _hover={{ borderBottom: "2px" }}
              pr={10}
            />
            <Form.Label
              htmlFor="message"
              position="absolute"
              left={3}
              top="20%"
              opacity={0.6}
              display={watchMessage ? "none" : "block"}
            >
              {t("common.forms.input.message.label")}
            </Form.Label>
            {!!errors.message && (
              <Icon
                as={FaExclamationCircle}
                height={4}
                w="auto"
                position="absolute"
                right={2}
                color="tomato"
                top={3}
              />
            )}
          </Box>

          <Box h="30px">
            <Form.ErrorMessage field="message" />
          </Box>
        </Form.Field>

        <Flex w="full" justifyContent="flex-end" mt={10}>
          <BorderBottomButton
            aria-label="Send message"
            type="submit"
            zIndex={10}
          >
            <Box>
              {isSubmitting
                ? t("common.forms.buttons.sending")
                : t("common.forms.buttons.sendMessage")}
            </Box>
          </BorderBottomButton>
        </Flex>
      </SimpleGrid>
    </FormProvider>
  );
}
