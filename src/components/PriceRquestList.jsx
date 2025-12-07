import React, { useEffect, useState } from "react";
import { getPricesRequest } from "../services/pricesrequest";

export default function PriceRequest() {
  const [list, setList] = useState([]);

  const fetchRequest = async ()=>{
    try {
        const response = await getPricesRequest();

        if(response?.success){
            setList(response?.data);
        }
    } catch (error) {
        console.log(error)
    }
  }
  console.log(list)
  useEffect(() => {
   fetchRequest();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>Better Price Requests</h2>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "Arial",
          }}
        >
          {/* Table Header */}
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Target Price</th>
              <th style={styles.th}>Created At</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {list.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ padding: 20, textAlign: "center" }}>
                  No data found!
                </td>
              </tr>
            ) : (
              list.map((item) => (
                <tr key={item.id} style={styles.row}>
                  <td style={styles.td}>{item.id}</td>
                  <td style={styles.td}>{item.name}</td>
                  <td style={styles.td}>{item.phone}</td>
                  <td style={styles.td}>{item.email}</td>
                  <td style={styles.td}>{item.targetPrice}</td>
                  <td style={styles.td}>
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  th: {
    padding: "12px",
    background: "#f3f3f3",
    borderBottom: "2px solid #ddd",
    textAlign: "left",
    fontWeight: "bold",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #eee",
  },
  row: {
    backgroundColor: "#fff",
  },
};
