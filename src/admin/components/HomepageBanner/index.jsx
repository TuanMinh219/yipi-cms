import { useState } from 'react';
import { Button, Alert, Typography, Container } from '../../../common/Atoms';
import './index.css';

export default function HomepageBanner({ banners = [], success = null, error = null, bannerCount = 0 }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewUrl(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append('bannerFile', selectedFile);

    try {
      const response = await fetch('/admin/homepage/banner/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        window.location.reload();
      } else {
        alert('Upload failed');
      }
    } catch (err) {
      console.error('Upload error:', err);
      alert('Error uploading file');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteBanner = async (bannerPath) => {
    if (confirm('Are you sure you want to delete this banner?')) {
      try {
        const formData = new FormData();
        formData.append('bannerPath', bannerPath);

        const response = await fetch('/admin/homepage/banner/delete', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          window.location.reload();
        }
      } catch (err) {
        console.error('Delete error:', err);
      }
    }
  };

  return (
    <div className="admin-layout">
      <div className="main-content">
        <main className="dashboard-content">
          <Container>
            <div className="upload-card">
              <Typography.H2 style={{ marginBottom: '10px' }}>
                <i className="fas fa-image"></i> Upload Banner Advertisement
              </Typography.H2>
              <Typography.Paragraph style={{ color: '#666', marginBottom: '20px' }}>
                The banner will be displayed on the homepage, directly below the hero section (the text and 2 buttons).
              </Typography.Paragraph>

              {success && (
                <Alert type="success" message="Success" description={success} style={{ marginBottom: '20px' }} />
              )}
              {error && (
                <Alert type="error" message="Error" description={error} style={{ marginBottom: '20px' }} />
              )}

              <form onSubmit={handleUpload} className="upload-form">
                <div className="file-input-wrapper">
                  <label htmlFor="bannerFile" className="file-input-label">
                    <i className="fas fa-cloud-upload-alt"></i>
                    <div style={{ marginTop: '10px' }}>
                      <strong>Select banner file</strong>
                      <p style={{ margin: '5px 0', color: '#999' }}>
                        JPG, PNG or JPEG (recommended: 1200x300px)
                      </p>
                    </div>
                  </label>
                  <input
                    type="file"
                    id="bannerFile"
                    name="bannerFile"
                    accept="image/jpeg,image/jpg,image/png"
                    required
                    onChange={handleFileSelect}
                  />
                </div>

                {previewUrl && (
                  <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <img
                      src={previewUrl}
                      alt="Preview"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '200px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    />
                  </div>
                )}

                <Button type="primary" htmlType="submit" loading={isUploading} style={{ marginTop: '15px' }}>
                  <i className="fas fa-upload"></i> {isUploading ? 'Uploading...' : 'Upload Banner'}
                </Button>
              </form>

              <div className="current-banner" style={{ marginTop: '30px' }}>
                <h3 style={{ marginBottom: '15px' }}>
                  <i className="fas fa-images"></i> All Banners ({bannerCount})
                </h3>
                <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
                  Banners will be displayed as a carousel on the homepage. Upload multiple banners to create a slideshow.
                </p>

                {banners && banners.length > 0 ? (
                  <div className="banner-list">
                    {banners.map((banner, idx) => (
                      <div key={idx} className="banner-item">
                        <img
                          src={banner}
                          alt={`Banner ${idx + 1}`}
                          style={{
                            width: '100%',
                            height: '150px',
                            objectFit: 'cover',
                            borderRadius: '6px',
                            marginBottom: '10px',
                          }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ color: '#666', fontSize: '12px' }}>
                            Banner #{idx + 1}
                          </span>
                          <button
                            type="button"
                            className="btn-delete"
                            onClick={() => handleDeleteBanner(banner)}
                          >
                            <i className="fas fa-trash"></i> Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', color: '#999', padding: '40px' }}>
                    <i className="fas fa-image" style={{ fontSize: '48px', marginBottom: '10px' }}></i>
                    <p>No banners uploaded yet. Upload your first banner above!</p>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
}
