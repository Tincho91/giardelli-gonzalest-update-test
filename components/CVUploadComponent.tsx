import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { Button } from './ui/button';
import { Upload, Trash } from 'lucide-react';

interface CVUploadComponentProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const CVUploadComponent: React.FC<CVUploadComponentProps> = ({
  disabled,
  onChange,
  onRemove,
  value
}) => {
  const onUpload = (result: any) => {
    const cvUrl = result.info.secure_url;
    onChange(cvUrl);
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative w-full rounded-md overflow-hidden">
            <div className="z-10 absolute top-2 right-2">
              <Button type="button" onClick={() => onRemove(url)} variant="destructive" size="sm">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-2 bg-gray-200">
              {url}
            </div>
          </div>
        ))}
      </div>
      <div className="mb-2 text-sm text-gray-600">
        Please upload your CV in PDF format. Maximum file size: 1MB.
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="d2obllus">
        {({ open }) => (
          <Button type="button" disabled={disabled} variant="secondary" onClick={(e) => open()}>
            <Upload className="h-4 w-4 mr-2" />
            Sube tu CV
          </Button>
        )}
      </CldUploadWidget>
    </div>
  );
}

export default CVUploadComponent;
