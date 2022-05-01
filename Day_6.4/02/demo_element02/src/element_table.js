import React from "react";
export default function Table_sv() {
    let Tba_Sv = [
        {
            sv_name: "Nguyen Van Tam",
            sv_class: "SD9",
            sv_age: 30,
            sv_add: "Ha Noi",
        },
        {
            sv_name: "Nguyen Van Tan",
            sv_class: "SD9",
            sv_age: 34,
            sv_add: "Nghe An",
        },
        {
            sv_name: "Hoang xuan Tu",
            sv_class: "SU9",
            sv_age: 24,
            sv_add: "Quang Binh",
        },
        {
            sv_name: "Tran Van Nam",
            sv_class: "DT9",
            sv_age: 33,
            sv_add: "Hue",
        },
        {
            sv_name: "Luong Anh Tu",
            sv_class: "ST3",
            sv_age: 25,
            sv_add: "Quang Nam",
        },
        {
            sv_name: "Dinh Xuan Tu",
            sv_class: "VS9",
            sv_age: 25,
            sv_add: "Binh Dinh",
        },
    ];
    return (
        <div className="container col-6 bg-info py-5 my-5 rounded-3">
            <h1 className="text-light text-center fw-bold">
                Danh sach sinh vien
            </h1>
            <table className="table table-dark table-striped text-center rounded-3">
                <thead>
                    <tr key="heading">
                        <th>No.</th>
                        <th>Ten sinh vien</th>
                        <th>Lop</th>
                        <th>Tuoi</th>
                        <th>Noi o</th>
                    </tr>
                </thead>
                <tbody>
                    {Tba_Sv.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.sv_name}</td>
                            <td>{item.sv_class}</td>
                            <td>{item.sv_age}</td>
                            <td>{item.sv_add}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
