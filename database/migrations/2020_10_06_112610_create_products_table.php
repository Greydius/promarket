<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->float('price');
            $table->string('vendor_code');
            $table->integer('quantity');
            $table->string('model');
            $table->string('code');
            $table->integer('price_with_installation');
            $table->text('installation_description');
            $table->string('manufacturer');
            $table->string('color');
            $table->string('img');
            $table->foreignId('sub_category_id')->constrained('sub_categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
