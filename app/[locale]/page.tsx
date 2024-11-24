import { Suspense } from "react";
import { getTranslations } from "next-intl/server";

import UsersTable from "@/components/users/strapi/UsersTable";
import AddUser from "@/components/users/strapi/AddUser";
import SearchInput from "@/components/common/SearchInput";
import TableSkeleton from "@/components/loading/TableSkeleton";
import DigiflyMap from "@/components/map/DigiflyMap";
import TextEditor from "@/components/common/TextEditor";
import Editor from "@/components/common/Editor";
import ReduxUsersTable from "@/components/users/redux/ReduxUsersTable";
import ReduxAddUser from "@/components/users/redux/AddUser";
import { cn } from "@/lib/utils";

export default async function HomePage({
  searchParams,
}: {
  searchParams: any;
}) {
  const { search, search_redux } = await searchParams;
  const t = await getTranslations();

  return (
    <div>
      <section className="relative section-style">
        <div className="container">
          <div className="space-y-3 mb-12">
            <h2 className="section-title">{t("part-1.title")} (Strapi)</h2>
            <p className="section-desc">{t("part-1.desc")}</p>
          </div>

          <div className="border">
            <div className="p-4 flex justify-between items-center gap-4 flex-wrap">
              <SearchInput placeholder={t("common.search-by-first-name")} />
              <AddUser />
            </div>

            <Suspense fallback={<TableSkeleton />}>
              <UsersTable search={search} />
            </Suspense>
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-0 bg-background opacity-10 blur-md pointer-events-none -z-1",
            "after:absolute after:top-0 after:end-0 after:w-2/3 after:h-2/3 after:rounded-full after:bg-primary after:-z-1 after:opacity-60 after:blur-3xl"
          )}
        />
      </section>

      <section className="section-style">
        <div className="container">
          <div className="space-y-3 mb-12">
            <h2 className="section-title">{t("part-1.title")} (Redux)</h2>
            <p className="section-desc">{t("part-1.desc")}</p>
          </div>

          <div className="border">
            <div className="p-4 flex justify-between items-center gap-4 flex-wrap">
              <SearchInput
                searchKey="search_redux"
                placeholder={t("common.search-by-first-name")}
              />

              <ReduxAddUser />
            </div>

            <ReduxUsersTable search={search_redux} />
          </div>
        </div>
      </section>

      <section className="section-style">
        <div className="container">
          <div className="space-y-3 mb-12">
            <h2 className="section-title">{t("part-2.title")}</h2>
            <p className="section-desc">{t("part-2.desc")}</p>
          </div>

          <div className="w-full aspect-square max-h-[500px]">
            <DigiflyMap />
          </div>
        </div>
      </section>

      <section className="section-style">
        <div className="container">
          <div className="space-y-3 mb-12">
            <h3 className="section-title">{t("part-3.title")} (Custom)</h3>
            <p className="section-desc">{t("part-3.desc")}</p>
          </div>

          <div>
            <TextEditor />
          </div>
        </div>
      </section>

      <section className="section-style">
        <div className="container">
          <div className="space-y-3 mb-12">
            <h3 className="section-title">{t("part-3.title")} (Quill)</h3>
            <p className="section-desc">{t("part-3.desc")}</p>
          </div>

          <div>
            <Editor />
          </div>
        </div>
      </section>
    </div>
  );
}
