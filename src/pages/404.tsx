import DefaultLayout from "@/components/layouts/DefaultLayout";
import Head from "@/components/layouts/Head";
import { useTranslation } from "next-i18next";
import { type ReactElement } from "react-markdown/lib/react-markdown";
import { Center, Heading, chakra } from "@chakra-ui/react";
import nextI18nConfig from "../../next-i18next.config.mjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";

NotFoundPage.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <Head
        title="Page not found"
        description="Page not found"
        url={`https://gabrielprrd.de/404`}
      />
      <chakra.main as={Center} height="90vh">
        <Heading size="lg" as="h1">
          {t("notFound.title")}
        </Heading>
      </chakra.main>
    </>
  );
}

type Params = {
  locale: string;
};

export const getStaticProps = async ({ locale }: Params) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "notFound"],
        nextI18nConfig,
        ["en", "pt"]
      )),
    },
  };
};
