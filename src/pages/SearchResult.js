import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { db } from "./../firebase.config";
import { toast } from "react-toastify";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  startAt,
  endAt,
} from "firebase/firestore";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";

const SearchResult = () => {
  const [listing, setListing] = useState("");
  const [lastFetchListing, setLastFetchListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const searchText = params.searchText;
  //const lowerCaseSearchText = searchText.toLowerCase();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const listingsRef = collection(db, "listings");
        const q = query(
          listingsRef,
          where("state", "==", searchText),
          orderBy("timestamp", "desc"), // Order the documents by timestamp in descending order
          limit(100)
        );
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisible);
        const listings = [];
        querySnap.forEach((doc) => {
          // console.log(doc.data());
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListing(listings);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("unable to fetch data");
      }
    };
    fetchListing();
  }, [params.searchText]);

  // const fetchLoadMoreListing = async () => {
  //   try {
  //     //refrence
  //     const listingsRef = collection(db, "listings");
  //     //query
  //     const q = query(
  //       listingsRef,
  //       where("type", "==", params.categoryName),
  //       orderBy("timestamp", "desc"),
  //       startAfter(lastFetchListing),
  //       limit(10)
  //     );
  //     //execute query
  //     const querySnap = await getDocs(q);
  //     const lastVisible = querySnap.docs[querySnap.docs.length - 1];
  //     setLastFetchListing(lastVisible);
  //     const listings = [];
  //     querySnap.forEach((doc) => {
  //       return listings.push({
  //         id: doc.id,
  //         data: doc.data(),
  //       });
  //     });
  //     setListing((prevState) => [...prevState, ...listings]);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Unble to fetch data");
  //   }
  // };

  const fetchLoadMoreListing = async () => {
    try {
      //refrence
      const listingsRef = collection(db, "listings");
      //query
      const q = query(
        listingsRef,
        where("state", "==", searchText),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchListing),
        limit(10)
      );
      //execute query
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisible);
      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListing((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Unble to fetch data");
    }
  };

  return (
    <Layout>
      <div className="mt-3 container-fluid">
        {loading ? (
          <Spinner />
        ) : listing && listing.length > 0 ? (
          <>
            <div>
              {listing.map((list) => (
                <ListingItem listing={list.data} id={list.id} key={list.id} />
                // <h3 key = {list.id}>{list.data.name}</h3>
              ))}
            </div>
          </>
        ) : (
          <p>No Listing For {searchText}</p>
        )}
      </div>
      {/* <div className="d-flex align-items-center justify-content-center mb-4 mt-4">
        {lastFetchListing && (
          <button
            className="btn btn-primary text-center"
            onClick={fetchLoadMoreListing}
          >
            Load more
          </button>
        )}
      </div> */}
    </Layout>
  );
};

export default SearchResult;
