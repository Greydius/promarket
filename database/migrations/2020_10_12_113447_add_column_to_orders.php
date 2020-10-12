<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToOrders extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->string('postcode')->nullable();
            $table->string('region')->nullable();
            $table->string('delivery')->nullable();
            $table->string('delivery_address')->nullable();
            $table->text('comment')->nullable();
            $table->string('payment_method')->nullable();
            $table->string('total_amout')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('postcode');
            $table->dropColumn('region');
            $table->dropColumn('delivery');
            $table->dropColumn('delivery_address');
            $table->dropColumn('comment');
            $table->dropColumn('payment_method');
            $table->dropColumn('total_amout');
        });
    }
}
