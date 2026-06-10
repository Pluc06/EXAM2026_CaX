function ProductTable({ products }) {
    return (
        <div className="card border-0 shadow-sm">
            <div className="card-body">
                <h5 className="fw-bold">Danh sách sản phẩm</h5>
                <p className="text-muted small">Danh sách sản phẩm mẫu được hiển thị từ dữ liệu hệ thống.</p>
                
                <div className="table-responsive">
                    <table className="table table-hover align-middle">
                        <thead>
                            <tr className="text-muted small fw-bold">
                                <th>STT</th>
                                <th>TÊN SẢN PHẨM</th>
                                <th>DANH MỤC</th>
                                <th>GIÁ</th>
                                <th>TRẠNG THÁI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <ProductRow key={product.id} product={product} index={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductTable