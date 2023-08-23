module Refinery
  module IconHelper

    def icon_symbol(icon_name)
      font_set = 'solid'
      symbol_name = 'icon_name'

    end

    private

    def svg_use_icon(font_set, symbol_name)
      tag.svg do
        tag.use href: "#{svg_path}/#{font_set}.svg##{symbol_name}"
      end
    end

    def icon_variations
      variations = JSON.parse('iconVariations.json')
    end
  end
end
