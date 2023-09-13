class ChangeColumnsInProducts < ActiveRecord::Migration[7.0]
	def change
		remove_column :products, :product_category_id
		remove_column :products, :product_type_id
		add_reference :products, :product_category, foreign_key: true
		add_reference :products, :product_type, foreign_key: true
  	rename_column :products, :Product_Name, :product_name
    rename_column :products, :Manufacturer, :manufacturer
  end
end