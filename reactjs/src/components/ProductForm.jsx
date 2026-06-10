function ProductForm({ onAddProduct }) {
    return (
        <div className="card border-0 shadow-sm">
            <div className="card-body">
                <h5 className="fw-bold">Thêm sản phẩm mới</h5>
                <p className="text-muted small">Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách.</p>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold text-muted small">Tên sản phẩm</label>
                        <input type="text" className="form-control" placeholder="Nhập tên sản phẩm" 
                               value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold text-muted small">Danh mục</label>
                        <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">-- Chọn danh mục --</option>
                            <option value="Điện thoại">Điện thoại</option>
                            <option value="Máy tính bảng">Máy tính bảng</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Phụ kiện">Phụ kiện</option>
                            <option value="Tai nghe">Tai nghe</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold text-muted small">Giá</label>
                        <input type="number" className="form-control" placeholder="Nhập giá" 
                               value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold text-muted small">Trạng thái còn hàng</label>
                        <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Còn hàng">Còn hàng</option>
                            <option value="Hết hàng">Hết hàng</option>
                        </select>
                    </div>
                    
                    <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-primary w-100">Thêm sản phẩm</button>
                        <button type="button" className="btn btn-light border w-50 text-nowrap" onClick={handleReset}>Làm mới form</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductForm