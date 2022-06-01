import React, {
  FunctionComponent,
  Fragment,
  lazy,
  Suspense,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";
import get from "lodash/get";
import toLower from "lodash/toLower";
import filter from "lodash/filter";
import find from "lodash/find";
import map from "lodash/map";
import Lightbox from "react-image-lightbox";
import { DetailsKeyValue } from "components/User/Modals/styles";
import { IDashboardProps } from "pages/Dashboard/types";
import ErrorBoundary from "components/ErrorBoundary";
import { DashboardWrapper, ScrollableBody } from "pages/Dashboard/styles";
import history from "utils/history";
import { getFormattedDate } from "utils/datetime";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import { each, includes, isEmpty } from "lodash";
import { ReferenceDataContext } from "App";

const ModalsPanel = lazy(() => import("pages/Dashboard/ModalsPanel"));

const Dashboard: FunctionComponent<IDashboardProps> = ({ match }) => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [isOpen, setOpen] = useState("");
  const [search, setSearch] = useState("");
  const page = get(match.params, "page", "0");
  const { language, setLanguage } = useContext<any>(ReferenceDataContext);

  const filterByEmail = useCallback(
    (data) => {
      if (search) {
        const filtered = filter(data, (item) =>
          includes(toLower(item?.email), toLower(search))
        );
        setFiltered(filtered);
      } else {
        setFiltered(data.slice(page, page + 10));
      }
    },
    [page, search]
  );

  const fetchUsersList = useCallback(() => {
    axios
      .get(`https://randomapi.com/api/c00be91a1486bcfe145f1ae24dc62ddf`)
      .then(({ data }) => {
        const results = get(data, "results.[0].data", []);
        console.log("data", results);
        setData(results);
        filterByEmail(results);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, [filterByEmail]);

  useEffect(() => {
    filterByEmail(data);
  }, [data, search, filterByEmail]);

  useEffect(() => {
    fetchUsersList();
  }, [match.params.page, fetchUsersList]);

  useEffect(() => {
    const id = match.params.id;
    if (id && !isEmpty(data)) {
      each(data, (item) =>
        console.log(
          "asd",
          get(item, "email", ""),
          get(item, "email", "") === id
        )
      );
      const selectedUser = find(
        data,
        (item: any) => get(item, "email", "") === id
      );
      console.log("fetch details plz", selectedUser);
      selectedUser && setLanguage(selectedUser);
    }
  }, [match.params.id, data, setLanguage]);

  return (
    <ErrorBoundary>
      <DashboardWrapper>
        <main className="px-0 full-page-height">
          <h1 style={{ textAlign: "center" }}>Users List</h1>
          <input
            style={{
              width: "400px",
              display: "block",
              margin: "40px auto",
            }}
            type="text"
            placeholder="Search By Email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <ScrollableBody>
            {map(filtered, (item: any) => {
              return (
                <div key={item?.email} className="center">
                  <DetailsKeyValue
                    onClick={() => {
                      history.push(`/${page}/${item?.email}`);
                    }}
                  >
                    <dt>Name:</dt>
                    <dd>{`${item?.name?.title} ${item?.name?.first} ${item?.name?.last}`}</dd>
                  </DetailsKeyValue>
                  <DetailsKeyValue>
                    <dt>Email:</dt>
                    <dd>{item?.email}</dd>
                  </DetailsKeyValue>
                  <DetailsKeyValue>
                    <dt>DOB:</dt>
                    <dd>{getFormattedDate(item?.dob?.date)}</dd>
                  </DetailsKeyValue>
                  <DetailsKeyValue>
                    <dt>Address:</dt>
                    <dd>{`${item?.location?.street?.name}, ${item?.location?.city}, ${item?.location?.country}, ${item?.location?.postcode}`}</dd>
                  </DetailsKeyValue>

                  <DetailsKeyValue>
                    <dt>Image:</dt>
                    <dd>
                      <img
                        alt=""
                        onClick={() => setOpen(item?.email)}
                        src={`${item?.picture?.thumbnail}`}
                      />
                    </dd>
                  </DetailsKeyValue>
                  {isOpen === item?.email && (
                    <Lightbox
                      mainSrc={item?.picture?.large}
                      onCloseRequest={() => {
                        setOpen("");
                      }}
                      onMovePrevRequest={() => {}}
                      onMoveNextRequest={() => {}}
                    />
                  )}
                </div>
              );
            })}
          </ScrollableBody>
          <div className="horizontal-center">
            <button
              className="prev"
              disabled={page === "0"}
              onClick={() => history.push(`/${parseInt(page) - 1}`)}
            >
              Prev
            </button>
            <button
              className="next"
              onClick={() => history.push(`/${parseInt(page) + 1}`)}
            >
              Next
            </button>
          </div>
        </main>
      </DashboardWrapper>
      <Suspense fallback={<Fragment />}>
        <ModalsPanel />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Dashboard;
