import React from 'react'
import { all } from '../components/Images'

const Image = ({ match }) => {
  const imageName = match.params.name
  let imageUrl

  for (const i in all) {
    if (all[i][imageName]) {
      imageUrl = all[i][imageName]
    }
  }
  return (
    <div>
      <h2>Image</h2>
      <img src={`${imageUrl}`} />

      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="ZVYXSYC5J5VGC" />
        <input type="hidden" name="cn" value="IMAGE_ID_HERE" />
        <table>
          <tr>
            <td>
              <input type="hidden" name="on0" value="Size" />
              Size
            </td>
          </tr>
          <tr>
            <td>
              <select name="os0">
                <option value="test">test £0.01 GBP</option>
                <option value="15x10 (381x254 mm)">
                  15x10 (381x254 mm) £40.00 GBP
                </option>
                <option value="18x12 (457x304 mm)">
                  18x12 (457x304 mm) £65.00 GBP
                </option>
                <option value="24x16 (609x406 mm)">
                  24x16 (609x406 mm) £95.00 GBP
                </option>
                <option value="30x20 (762x508 mm)">
                  30x20 (762x508 mm) £120.00 GBP
                </option>
              </select>
            </td>
          </tr>
        </table>
        <input type="hidden" name="currency_code" value="GBP" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal – The safer, easier way to pay online!"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  )
}

export default Image
