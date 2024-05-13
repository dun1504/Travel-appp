import React, { useState } from 'react';

const ArticleForm = () => {
  const [formData, setFormData] = useState([{
    'type': 'text',
    'type': 'text',
    'type': 'text'
  }]);

  const handleTypeChange = (index, event) => {
    const updatedFormData = [...formData];
    updatedFormData[index].type = event.target.value;
    setFormData(updatedFormData);
  };

  const handleContentChange = (index, event) => {
    const updatedFormData = [...formData];
    updatedFormData[index].content = event.target.value;
    setFormData(updatedFormData);
  };

  const handleSourceChange = (index, event) => {
    const updatedFormData = [...formData];
    updatedFormData[index].source = event.target.value;
    setFormData(updatedFormData);
  };

  const handleCaptionChange = (index, event) => {
    const updatedFormData = [...formData];
    updatedFormData[index].caption = event.target.value;
    setFormData(updatedFormData);
  };

  const addNewItem = () => {
    setFormData([...formData, { type: '', content: '', source: '', caption: '' }]);
  };

  const removeItem = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý dữ liệu tại đây
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((item, index) => (
        <div key={index}>
          <label>
            Type:
            <select value={item.type} onChange={(event) => handleTypeChange(index, event)}>
              <option value="text">Text</option>
              <option value="image">Image</option>
            </select>
          </label>

          {item.type === 'text' && (
            <div>
              <label>
                Content:
                <textarea value={item.content} onChange={(event) => handleContentChange(index, event)} />
              </label>
            </div>
          )}

          {item.type === 'image' && (
            <div>
              <label>
                Source:
                <input type="text" value={item.source} onChange={(event) => handleSourceChange(index, event)} />
              </label>
              <label>
                Caption:
                <input type="text" value={item.caption} onChange={(event) => handleCaptionChange(index, event)} />
              </label>
            </div>
          )}

          <button type="button" onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}

      <button type="button" onClick={addNewItem}>Add Item</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArticleForm;