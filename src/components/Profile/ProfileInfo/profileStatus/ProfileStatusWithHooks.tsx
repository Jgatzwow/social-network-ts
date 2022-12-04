import React, { ChangeEvent, useEffect, useState } from "react";

type PropsType = {
  status: string;
  updateStatus: (newStatus: string) => void;
};

export const ProfileStatusWithHooks: React.FC<PropsType> = ({
  status,
  updateStatus,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  useEffect(() => {
    setLocalStatus(status);
  }, [status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(localStatus);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>
            {status || "Enter your Status"}
          </span>
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus
            onBlur={deactivateEditMode}
            value={localStatus}
            type="text"
          />
        </div>
      )}
    </div>
  );
};
