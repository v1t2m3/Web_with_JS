import { useState, useEffect } from 'react';
import Router from 'next/router';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
export async function getContacList() {
	const res = await axios.get('http://localhost:3001/contact');
	return {
		props: {
			contactList: res.data
		}
	};
}
const handleDelete = (e) => {
	async function deleteData() {
		const res = await axios.delete('http://localhost:3001/contact' + e.target.id);
		return res.status;
	}
	deleteData();
	Router.reload(window.location.pathname);
};
export default function Home({ contactList }) {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Tel</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{contactList.map((currentVal, index) => (
						<tr key={index}>
							<td> {currentVal.name}</td>
							<td> {currentVal.email}</td>
							<td> {currentVal.tel}</td>
							<td className="text-center">
								<button className="btn btn-warning">Edit</button>
								<button id={index} className="btn btn-danger" onClick={handleDelete}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
