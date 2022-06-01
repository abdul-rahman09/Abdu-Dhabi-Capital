import each from "lodash/each";
import replace from "lodash/replace";

const ROUTES_OBJ = {
  monitorDashboard: `https://fleet.cortexpowered.com/devices?order_by=status%2Cid&page=1&page_size=10&q=<mac>`,
};
/**
 * getRoute creates the URL through provided routeName & params arguments
 * @param  {string} routeName   any object name of ROUTES_OBJ e.g. login
 * @param  {Object} [params={}] param values replace with strings present <...>.
 * @return {string}             URL
 */
const getRoute = (routeName: keyof typeof ROUTES_OBJ, params = {}): string => {
  let url: string = ROUTES_OBJ[routeName];
  each(params, (val: string, key: string) => {
    val = Array.isArray(val) ? val.join(",") : val;
    url = replace(url, new RegExp(`<${key}>`, "g"), val);
  });
  return url;
};

export default getRoute;
