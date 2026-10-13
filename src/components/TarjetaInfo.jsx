export function TarjetaInfo({ titulo, descripcion }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginBottom: '15px', background: '#f9f9f9' }}>
      <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{titulo}</h3>
      <p style={{ margin: 0, color: '#666' }}>{descripcion}</p>
    </div>
  );
}