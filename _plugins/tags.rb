module Jekyll
  class RenderCodeStartTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @tokens = tokens
    end

    def render(context)
      "<pre><code class=\"#{@tokens.to_s}\">"
    end
  end

  class RenderCodeEndTag < Liquid::Tag
    def render(context)
      "</code></pre>"
    end
  end

end

Liquid::Template.register_tag('code', Jekyll::RenderCodeStartTag)
Liquid::Template.register_tag('end_code', Jekyll::RenderCodeEndTag)