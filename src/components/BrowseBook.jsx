

import AllBook from "./AllBook";
import { books } from "../utils/bookmockData"
const BrowseBook = () => {
  return (
    <div>
      <AllBook allbook={books} />
    </div>
  );
}

export default BrowseBook;
