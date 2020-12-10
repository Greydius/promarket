<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFixingDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Fixing-details', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code');
            $table->string('breadcrumb_name');
            $table->string('vendor_code');
            $table->string('fixing_time');
            $table->string('description');
            $table->string('price')->nullable();
            $table->foreignId('manufacturer_model_id')->constrained('manufacturer_models')->onDelete('cascade');
            $table->foreignId('service_id')->constrained('services')->onDelete('cascade');
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
        Schema::dropIfExists('Fixing-details');
    }
}
