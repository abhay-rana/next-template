'use client';

import { useEffect, useState } from 'react';
import {
    getDocs,
    collection,
    addDoc,
    query,
    doc,
    where,
    updateDoc,
    deleteDoc,
} from 'firebase/firestore';
import db from '../../config/firebase-db';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users_data, setUsersData] = useState([]);

    //! read the docs
    async function fetchDocs() {
        try {
            const querySnapshot = await getDocs(collection(db, 'users'));
            const users_data = [];
            querySnapshot.forEach((doc) => {
                users_data.push({ id: doc.id, ...doc.data() });
            });
            setUsersData(users_data);
        } catch (err) {
            console.error('Error while reading docs', err);
        }
    }

    //! read the docs with query
    async function queryDocs() {
        try {
            const collection_name = collection(db, 'users');
            const queryRef = query(
                collection_name,
                where('email', '==', 'abhayrana286@gmail.com')
            );
            const docs = await getDocs(queryRef);
            const student_data = [];
            docs.forEach((doc) => {
                student_data.push({ id: doc.id, ...doc.data() });
            });
            console.log('query_data', student_data);
        } catch (err) {
            console.error('document query error', err);
        }
    }

    //!delete the docs
    async function deleteDocs(id) {
        const doc_ref = doc(db, 'users', id);
        await deleteDoc(doc_ref);
    }

    //! update the docs
    async function updateDocs(id) {
        const doc_ref = doc(db, 'users', id);
        await updateDoc(doc_ref, {
            email,
        });
    }

    useEffect(() => {
        fetchDocs();
        queryDocs();
    }, []);

    //! create(post) data
    async function onSubmitHandler() {
        try {
            let payload = {
                name,
                email,
            };

            const collection_name = collection(db, 'users');
            const docRef = await addDoc(collection_name, payload);
            console.log('Document written with ID: ', docRef.id);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    }

    return (
        <>
            <div className="text-center">This is Form</div>
            <div className="border border-red-400 p-4">
                <input
                    placeholder="Enter First Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    placeholder="Enter Last Name"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={onSubmitHandler}>Submit</button>
            </div>
            <div className="border border-green-500 p-3">
                <div>Get Data</div>
                <div>{JSON.stringify(users_data)}</div>
            </div>
        </>
    );
};

export default Form;
