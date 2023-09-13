import axios from "axios";

export default async function fetchData() {
  try {
    const result = await axios(
      "https://gist.githubusercontent.com/gabrielpscf/5c571687d5f11b68fd8cfbf990387f8b/raw/6891813ac5ecb0b9b9308c8ccd9bd3a97c456107/data.json"
    );

    const { Creators: creators, Products: products } = result.data;
    return { creators, products };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}
