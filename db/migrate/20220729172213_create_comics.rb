class CreateComics < ActiveRecord::Migration[6.1]
  def change
    create_table :comics do |t|
      t.string :name
      t.string :author
      t.string :illustrator
      t.string :company
      t.string :protagonist
      t.string :cover_illustration
      t.integer :release_year
      t.boolean :ongoing
      t.integer :page_count

      t.timestamps
    end
  end
end
