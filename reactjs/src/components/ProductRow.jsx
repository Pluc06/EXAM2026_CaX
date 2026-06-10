function ProductRow({ product, index }) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            {/* Format số sang định dạng tiền tệ VNĐ */}
            <td>{product.price.toLocaleString('vi-VN')} đ</td>
            <td>
                {product.status ? (
                    <span className="badge rounded-pill badge-con-hang px-3 py-2">Còn hàng</span>
                ) : (
                    <span className="badge rounded-pill badge-het-hang px-3 py-2">Hết hàng</span>
                )}
            </td>
        </tr>
    );
}

export default ProductRow