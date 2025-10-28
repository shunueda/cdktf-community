// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/vpc_ipv6internetbandwidth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpv6InternetbandwidthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/vpc_ipv6internetbandwidth#bandwidth VpcIpv6Internetbandwidth#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/vpc_ipv6internetbandwidth#id VpcIpv6Internetbandwidth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/vpc_ipv6internetbandwidth#internet_charge_type VpcIpv6Internetbandwidth#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/vpc_ipv6internetbandwidth#ipv6_address_id VpcIpv6Internetbandwidth#ipv6_address_id}
  */
  readonly ipv6AddressId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/vpc_ipv6internetbandwidth#ipv6_gateway_id VpcIpv6Internetbandwidth#ipv6_gateway_id}
  */
  readonly ipv6GatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/vpc_ipv6internetbandwidth alibabacloudstack_vpc_ipv6internetbandwidth}
*/
export class VpcIpv6Internetbandwidth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_vpc_ipv6internetbandwidth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcIpv6Internetbandwidth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcIpv6Internetbandwidth to import
  * @param importFromId The id of the existing VpcIpv6Internetbandwidth that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/vpc_ipv6internetbandwidth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcIpv6Internetbandwidth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_vpc_ipv6internetbandwidth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/vpc_ipv6internetbandwidth alibabacloudstack_vpc_ipv6internetbandwidth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpv6InternetbandwidthConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpv6InternetbandwidthConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_vpc_ipv6internetbandwidth',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._id = config.id;
    this._internetChargeType = config.internetChargeType;
    this._ipv6AddressId = config.ipv6AddressId;
    this._ipv6GatewayId = config.ipv6GatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // internet_charge_type - computed: true, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // ipv6_address_id - computed: false, optional: false, required: true
  private _ipv6AddressId?: string; 
  public get ipv6AddressId() {
    return this.getStringAttribute('ipv6_address_id');
  }
  public set ipv6AddressId(value: string) {
    this._ipv6AddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIdInput() {
    return this._ipv6AddressId;
  }

  // ipv6_gateway_id - computed: false, optional: false, required: true
  private _ipv6GatewayId?: string; 
  public get ipv6GatewayId() {
    return this.getStringAttribute('ipv6_gateway_id');
  }
  public set ipv6GatewayId(value: string) {
    this._ipv6GatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayIdInput() {
    return this._ipv6GatewayId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      id: cdktf.stringToTerraform(this._id),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      ipv6_address_id: cdktf.stringToTerraform(this._ipv6AddressId),
      ipv6_gateway_id: cdktf.stringToTerraform(this._ipv6GatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address_id: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_gateway_id: {
        value: cdktf.stringToHclTerraform(this._ipv6GatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
