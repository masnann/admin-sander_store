import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import Sidebar from "../../components/sidebar/Sidebar";
import { Pagination } from "../../components/pagination/Pagination";
import useReviews from "../../hooks/review/GetAll";

const ReviewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const { reviews, loading, error, totalPages } = useReviews(currentPage, token);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDetail = (id) => {
    navigate(`/review/detail/${id}`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4 text-indigo-800 border-b-2 border-indigo-500 pb-2">
            Ulasan
          </h1>

          {/* Display Reviews Table */}
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full bg-white border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th className="border p-3 bg-gray-300 text-gray-700">
                    Nama Produk
                  </th>
                  <th className="border p-3 bg-gray-300 text-gray-700">
                    Rating
                  </th>
                  <th className="border p-3 bg-gray-300 text-gray-700">
                    Total Ulasan
                  </th>
                  <th className="border p-3 bg-gray-300 text-gray-700">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4" className="text-center py-4">
                      Memuat...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-red-500">
                      Error: {error}
                    </td>
                  </tr>
                ) : (
                  reviews.map((review) => (
                    <tr key={review.id} className="hover:bg-gray-100">
                      <td className="border p-3 ">{review.name}</td>
                      <td className="border p-3 text-center">
                        {review.rating}
                      </td>
                      <td className="border p-3 text-center">
                        {review.total_review}
                      </td>
                      <td className="border p-3 text-center">
                        <button
                          className="mr-2 text-purple-600 hover:text-purple-900"
                          onClick={() => handleDetail(review.id)}
                        >
                          <FaInfoCircle />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Display Pagination */}
          <div className="mt-8">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onChangePage={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
