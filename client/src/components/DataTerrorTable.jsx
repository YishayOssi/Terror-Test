export default function DataTerrorTable({ data }) {
  return (
    <div className="table-container">
      <table className="main-table">
        <thead>
          <tr>
            <th>attacktype1_txt</th>
            <th>city</th>
            <th>corp1</th>
            <th>country_txt</th>
            <th>eventid</th>
            <th>iyear</th>
            <th>motive</th>
            <th>region_txt</th>
            <th>summary</th>
            <th>target1</th>
            <th>targsubtype1_txt</th>
            <th>targtype1_txt</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item, index) => (
              <tr key={index} className="complaint-row">
                <td>{item.attacktype1_txt}</td>
                <td>{item.city}</td>
                <td>{item.corp1}</td>
                <td>{item.country_txt}</td>
                <td>{item.eventid}</td>
                <td>{item.iyear}</td>
                <td>{item.motive}</td>
                <td>{item.region_txt}</td>
                <td>{item.summary}</td>
                <td>{item.target1}</td>
                <td>{item.targsubtype1_txt}</td>
                <td>{item.targtype1_txt}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
