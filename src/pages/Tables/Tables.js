import React from "react";
import Card from "../../component/Card/Card";
import "./Tables.scss";

const Tables = () => {
  return (
    <div className="container-fluid p-0">
      <div>
        <Card
          cardHeader={
            <>
              <strong className="fs-6">Basic Table</strong>
            </>
          }
          cardBodyBg="bg-light"
          cardBody={
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead className="text-primary">
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>City</td>
                      <td className="text-center">Score</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-v-e1a7d39c>
                      <td>Matthew McCormick</td>
                      <td>matthew30@mail.ol</td>
                      <td>Vancouver</td>
                      <td className="text-center">93</td>
                    </tr>
                    <tr>
                      <td>Nancy Bo</td>
                      <td>nancy@boonweb.com</td>
                      <td>Washington</td>
                      <td className="text-center">280</td>
                    </tr>
                    <tr data-v-e1a7d39c>
                      <td>Frederiko Lopez</td>
                      <td>fr.lopez@webmail.sp</td>
                      <td>Barcelona</td>
                      <td className="text-center">16</td>
                    </tr>
                    <tr>
                      <td>Stanley Hummer</td>
                      <td>mr_winner_2999@gmail.cb</td>
                      <td>Manchester</td>
                      <td className="text-center">57</td>
                    </tr>
                    <tr data-v-e1a7d39c>
                      <td>Lendley Wintz</td>
                      <td>9938198146@mailster.io</td>
                      <td>Wien</td>
                      <td className="text-center">113</td>
                    </tr>
                    <tr>
                      <td>Barbara Noz</td>
                      <td>barbaranoz@mailster.io</td>
                      <td>Brussels</td>
                      <td className="text-center">68</td>
                    </tr>
                    <tr data-v-e1a7d39c>
                      <td>Matthew McCormick</td>
                      <td>matthew30@mail.ol</td>
                      <td>Vancouver</td>
                      <td className="text-center">93</td>
                    </tr>
                    <tr>
                      <td>Nancy Bo</td>
                      <td>nancy@boonweb.com</td>
                      <td>Washington</td>
                      <td className="text-center">280</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          }
        ></Card>
      </div>
      <div className="mt-4">
        <Card
          cardHeader={
            <>
              <strong className="fs-6">Colors, Icons, Labels</strong>
            </>
          }
          cardBodyBg="bg-light"
          cardBody={
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead className="text-primary">
                    <tr>
                      <td></td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>City</td>
                      <td className="text-center">Score</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-v-e1a7d39c>
                      <td></td>
                      <td>Matthew McCormick</td>
                      <td>matthew30@mail.ol</td>
                      <td>Vancouver</td>
                      <td className="text-center">93</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Nancy Bo</td>
                      <td>nancy@boonweb.com</td>
                      <td>Washington</td>
                      <td className="text-center">280</td>
                      <td></td>
                    </tr>
                    <tr data-v-e1a7d39c>
                      <td></td>
                      <td>Frederiko Lopez</td>
                      <td>fr.lopez@webmail.sp</td>
                      <td>Barcelona</td>
                      <td className="text-center">16</td>
                      <td></td>
                    </tr>
                    <tr className="table-danger">
                      <td>
                        <span className="badge badge-danger">DANGER</span>
                      </td>
                      <td>Stanley Hummer</td>
                      <td>mr_winner_2999@gmail.cb</td>
                      <td>Manchester</td>
                      <td className="text-center">57</td>
                      <td>
                        <i className="fa fa-exclamation-triangle text-danger"></i>
                      </td>
                    </tr>
                    <tr className="table-success">
                      <td>
                        <span className="badge badge-primary">SUCCESS</span>
                      </td>
                      <td>Lendley Wintz</td>
                      <td>9938198146@mailster.io</td>
                      <td>Wien</td>
                      <td className="text-center">113</td>
                      <td>
                        <i className="fa fa-check text-success fw-bold"></i>
                      </td>
                    </tr>
                    <tr className="table-warning">
                      <td>
                        <span className="badge badge-warning">WARNING</span>
                      </td>
                      <td>Barbara Noz</td>
                      <td>barbaranoz@mailster.io</td>
                      <td>Brussels</td>
                      <td className="text-center">68</td>
                      <td></td>
                    </tr>
                    <tr data-v-e1a7d39c>
                      <td></td>
                      <td>Matthew McCormick</td>
                      <td>matthew30@mail.ol</td>
                      <td>Vancouver</td>
                      <td className="text-center">93</td>
                      <td></td>
                    </tr>
                    <tr className="table-info">
                      <td>
                        <span className="badge  badge-info">Info</span>
                      </td>
                      <td>Nancy Bo</td>
                      <td>nancy@boonweb.com</td>
                      <td>Washington</td>
                      <td className="text-center">280</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          }
        ></Card>
      </div>
      <div className="mt-4">
        <Card
          cardHeader={
            <>
              <strong className="fs-6">Search & Pagination</strong>
            </>
          }
          cardBodyBg="bg-light"
          cardBody={
            <>
              <div className="table-responsive">
                <div className="d-flex justify-content-between mb-3">
                  <div className="form-group">
                    <form class="d-flex">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search Name"
                        aria-label="Search"
                        required
                      />
                      <button class="btn btn-outline-success" type="submit">
                        <i className="fa fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div class="dropdown">
                    <button
                      class="btn btn-primary dropdown-toggle"
                      type="button"
                    >
                      6 per page
                    </button>
                  </div>
                </div>
                <table className="table">
                  <thead className="text-primary">
                    <tr className="fw-bold">
                      <td>Name</td>
                      <td>Email</td>
                      <td>City</td>
                      <td>Score</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </>
          }
        ></Card>
      </div>
    </div>
  );
};

export default Tables;
