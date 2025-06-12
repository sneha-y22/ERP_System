import React, { useState } from 'react';
import '../../styles/Admin/FeeFinance.css';

const FeeFinanceForm = () => {
  const [feeData, setFeeData] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Paid');

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ student: '', amount: '', status: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const addFee = () => {
    if (studentName && amount) {
      setFeeData([...feeData, { student: studentName, amount, status }]);
      setStudentName('');
      setAmount('');
      setStatus('Paid');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(feeData[index]);
  };

  const handleSave = () => {
    const updatedData = [...feeData];
    updatedData[editIndex] = editData;
    setFeeData(updatedData);
    setEditIndex(null);
    setEditData({ student: '', amount: '', status: '' });
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditData({ student: '', amount: '', status: '' });
  };

  const filteredFeeData = feeData.filter(entry =>
    entry.student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="form-card">
      <h3>Fee & Finance</h3>

      <input
        type="text"
        placeholder="Search Student"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Paid">Paid</option>
        <option value="Unpaid">Unpaid</option>
      </select>
      <button onClick={addFee}>Add</button>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeeData.map((entry, idx) => (
            <tr key={idx}>
              <td>
                {editIndex === idx ? (
                  <input
                    type="text"
                    value={editData.student}
                    onChange={(e) =>
                      setEditData({ ...editData, student: e.target.value })
                    }
                  />
                ) : (
                  entry.student
                )}
              </td>
              <td>
                {editIndex === idx ? (
                  <input
                    type="number"
                    value={editData.amount}
                    onChange={(e) =>
                      setEditData({ ...editData, amount: e.target.value })
                    }
                  />
                ) : (
                  entry.amount
                )}
              </td>
              <td className={entry.status === 'Paid' ? 'paid' : 'unpaid'}>
                {editIndex === idx ? (
                  <select
                    value={editData.status}
                    onChange={(e) =>
                      setEditData({ ...editData, status: e.target.value })
                    }
                  >
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                  </select>
                ) : (
                  entry.status
                )}
              </td>
              <td>
                {editIndex === idx ? (
                  <>
                    <button className="table-action-btn save-btn" onClick={handleSave}>Save</button>
                    <button className="table-action-btn cancel-btn" onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <button className="table-action-btn edit-btn" onClick={() => handleEdit(idx)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeFinanceForm;
