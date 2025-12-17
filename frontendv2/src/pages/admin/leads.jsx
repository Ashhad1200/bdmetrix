import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const LeadsAdminPanel = () => {
    const [submissions, setSubmissions] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [page, setPage] = useState(0);
    const [exportLoading, setExportLoading] = useState(false);
    const limit = 50;

    // Get auth credentials from environment or prompt user
    const getAuthHeader = () => {
        // For development, use default credentials
        // In production, this should prompt the user or use stored credentials
        const username = process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'admin';
        const password = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'changeme123';
        return 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
    };

    // Fetch submissions
    const fetchSubmissions = async () => {
        setLoading(true);
        setError('');

        try {
            const response = await fetch(`/api/contact/list?limit=${limit}&offset=${page * limit}`, {
                headers: {
                    'Authorization': getAuthHeader(),
                },
            });
            const data = await response.json();

            if (response.ok && data.success) {
                setSubmissions(data.submissions);
                setTotal(data.total);
            } else {
                setError(data.message || 'Failed to load submissions');
            }
        } catch (err) {
            setError('Unable to load submissions. Please try again.');
            console.error('Fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    // Load submissions on mount and page change
    useEffect(() => {
        fetchSubmissions();
    }, [page]);

    // Export database
    const handleExport = async () => {
        setExportLoading(true);

        try {
            const response = await fetch('/api/db/export', {
                headers: {
                    'Authorization': getAuthHeader(),
                },
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `contacts-backup-${new Date().toISOString().split('T')[0]}.db`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            } else {
                alert('Failed to export database');
            }
        } catch (err) {
            alert('Export error: ' + err.message);
        } finally {
            setExportLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Contact Submissions - Admin Panel</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h1>Contact Submissions</h1>
                            <button
                                className="btn btn-primary"
                                onClick={handleExport}
                                disabled={exportLoading}
                            >
                                {exportLoading ? 'Exporting...' : '📥 Export Database'}
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="alert alert-info mb-4">
                            <strong>Total Submissions:</strong> {total}
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )}

                        {/* Loading State */}
                        {loading && (
                            <div className="text-center py-5">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}

                        {/* Submissions Table */}
                        {!loading && submissions.length > 0 && (
                            <>
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead className="table-dark">
                                            <tr>
                                                <th>ID</th>
                                                <th>Date</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Service Type</th>
                                                <th>Message</th>
                                                <th>IP Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {submissions.map((submission) => (
                                                <tr key={submission.id}>
                                                    <td>{submission.id}</td>
                                                    <td>
                                                        <small>
                                                            {new Date(submission.submitted_at).toLocaleString()}
                                                        </small>
                                                    </td>
                                                    <td>{submission.name}</td>
                                                    <td>
                                                        <a href={`mailto:${submission.email}`}>
                                                            {submission.email}
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href={`tel:${submission.phone}`}>
                                                            {submission.phone}
                                                        </a>
                                                    </td>
                                                    <td>{submission.service_type}</td>
                                                    <td>
                                                        <div style={{ maxWidth: '300px', whiteSpace: 'pre-wrap', fontSize: '0.9em' }}>
                                                            {submission.message}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">
                                                            {submission.ip_address || 'N/A'}
                                                        </small>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div>
                                        Showing {page * limit + 1} - {Math.min((page + 1) * limit, total)} of {total}
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-secondary me-2"
                                            onClick={() => setPage(p => Math.max(0, p - 1))}
                                            disabled={page === 0}
                                        >
                                            ← Previous
                                        </button>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => setPage(p => p + 1)}
                                            disabled={(page + 1) * limit >= total}
                                        >
                                            Next →
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Empty State */}
                        {!loading && submissions.length === 0 && !error && (
                            <div className="alert alert-warning">
                                No contact submissions yet.
                            </div>
                        )}

                        {/* Refresh Button */}
                        <div className="mt-4 text-center">
                            <button
                                className="btn btn-outline-primary"
                                onClick={fetchSubmissions}
                                disabled={loading}
                            >
                                🔄 Refresh
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .table {
          font-size: 0.95rem;
        }
        
        .table th {
          white-space: nowrap;
        }
        
        .table td {
          vertical-align: middle;
        }
      `}</style>
        </>
    );
};

export default LeadsAdminPanel;
