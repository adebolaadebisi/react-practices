import Button from './Buttons'

export default function ButtonsShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-6 space-y-6">
        <h2 className="text-xl font-bold text-gray-800">Button Component Library</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Primary</p>
            <Button variant="primary">Primary</Button>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-600">Secondary</p>
            <Button variant="secondary">Secondary</Button>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-600">Danger</p>
            <Button variant="danger">Danger</Button>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-600">Success</p>
            <Button variant="success">Success</Button>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-600">Large</p>
            <Button variant="primary" size="large">Large Button</Button>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-600">Small</p>
            <Button variant="primary" size="small">Small</Button>
          </div>
        </div>

        <p className="text-xs text-gray-500">Variants: primary, secondary, danger, success. Sizes: large, medium, small.</p>
      </div>
    </div>
  )
}
