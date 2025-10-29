// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclNetworkGatewayInterfaceV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#aws_gw_id DataEclNetworkGatewayInterfaceV2#aws_gw_id}
  */
  readonly awsGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#azure_gw_id DataEclNetworkGatewayInterfaceV2#azure_gw_id}
  */
  readonly azureGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#description DataEclNetworkGatewayInterfaceV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#gateway_interface_id DataEclNetworkGatewayInterfaceV2#gateway_interface_id}
  */
  readonly gatewayInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#gcp_gw_id DataEclNetworkGatewayInterfaceV2#gcp_gw_id}
  */
  readonly gcpGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#gw_vipv4 DataEclNetworkGatewayInterfaceV2#gw_vipv4}
  */
  readonly gwVipv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#gw_vipv6 DataEclNetworkGatewayInterfaceV2#gw_vipv6}
  */
  readonly gwVipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#id DataEclNetworkGatewayInterfaceV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#interdc_gw_id DataEclNetworkGatewayInterfaceV2#interdc_gw_id}
  */
  readonly interdcGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#internet_gw_id DataEclNetworkGatewayInterfaceV2#internet_gw_id}
  */
  readonly internetGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#name DataEclNetworkGatewayInterfaceV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#netmask DataEclNetworkGatewayInterfaceV2#netmask}
  */
  readonly netmask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#network_id DataEclNetworkGatewayInterfaceV2#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#primary_ipv4 DataEclNetworkGatewayInterfaceV2#primary_ipv4}
  */
  readonly primaryIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#primary_ipv6 DataEclNetworkGatewayInterfaceV2#primary_ipv6}
  */
  readonly primaryIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#region DataEclNetworkGatewayInterfaceV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#secondary_ipv4 DataEclNetworkGatewayInterfaceV2#secondary_ipv4}
  */
  readonly secondaryIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#secondary_ipv6 DataEclNetworkGatewayInterfaceV2#secondary_ipv6}
  */
  readonly secondaryIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#service_type DataEclNetworkGatewayInterfaceV2#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#status DataEclNetworkGatewayInterfaceV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#tenant_id DataEclNetworkGatewayInterfaceV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#vpn_gw_id DataEclNetworkGatewayInterfaceV2#vpn_gw_id}
  */
  readonly vpnGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#vrid DataEclNetworkGatewayInterfaceV2#vrid}
  */
  readonly vrid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2 ecl_network_gateway_interface_v2}
*/
export class DataEclNetworkGatewayInterfaceV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_network_gateway_interface_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclNetworkGatewayInterfaceV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclNetworkGatewayInterfaceV2 to import
  * @param importFromId The id of the existing DataEclNetworkGatewayInterfaceV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclNetworkGatewayInterfaceV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_network_gateway_interface_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_gateway_interface_v2 ecl_network_gateway_interface_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclNetworkGatewayInterfaceV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclNetworkGatewayInterfaceV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_network_gateway_interface_v2',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsGwId = config.awsGwId;
    this._azureGwId = config.azureGwId;
    this._description = config.description;
    this._gatewayInterfaceId = config.gatewayInterfaceId;
    this._gcpGwId = config.gcpGwId;
    this._gwVipv4 = config.gwVipv4;
    this._gwVipv6 = config.gwVipv6;
    this._id = config.id;
    this._interdcGwId = config.interdcGwId;
    this._internetGwId = config.internetGwId;
    this._name = config.name;
    this._netmask = config.netmask;
    this._networkId = config.networkId;
    this._primaryIpv4 = config.primaryIpv4;
    this._primaryIpv6 = config.primaryIpv6;
    this._region = config.region;
    this._secondaryIpv4 = config.secondaryIpv4;
    this._secondaryIpv6 = config.secondaryIpv6;
    this._serviceType = config.serviceType;
    this._status = config.status;
    this._tenantId = config.tenantId;
    this._vpnGwId = config.vpnGwId;
    this._vrid = config.vrid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_gw_id - computed: true, optional: true, required: false
  private _awsGwId?: string; 
  public get awsGwId() {
    return this.getStringAttribute('aws_gw_id');
  }
  public set awsGwId(value: string) {
    this._awsGwId = value;
  }
  public resetAwsGwId() {
    this._awsGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsGwIdInput() {
    return this._awsGwId;
  }

  // azure_gw_id - computed: true, optional: true, required: false
  private _azureGwId?: string; 
  public get azureGwId() {
    return this.getStringAttribute('azure_gw_id');
  }
  public set azureGwId(value: string) {
    this._azureGwId = value;
  }
  public resetAzureGwId() {
    this._azureGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureGwIdInput() {
    return this._azureGwId;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // gateway_interface_id - computed: true, optional: true, required: false
  private _gatewayInterfaceId?: string; 
  public get gatewayInterfaceId() {
    return this.getStringAttribute('gateway_interface_id');
  }
  public set gatewayInterfaceId(value: string) {
    this._gatewayInterfaceId = value;
  }
  public resetGatewayInterfaceId() {
    this._gatewayInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInterfaceIdInput() {
    return this._gatewayInterfaceId;
  }

  // gcp_gw_id - computed: true, optional: true, required: false
  private _gcpGwId?: string; 
  public get gcpGwId() {
    return this.getStringAttribute('gcp_gw_id');
  }
  public set gcpGwId(value: string) {
    this._gcpGwId = value;
  }
  public resetGcpGwId() {
    this._gcpGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpGwIdInput() {
    return this._gcpGwId;
  }

  // gw_vipv4 - computed: true, optional: true, required: false
  private _gwVipv4?: string; 
  public get gwVipv4() {
    return this.getStringAttribute('gw_vipv4');
  }
  public set gwVipv4(value: string) {
    this._gwVipv4 = value;
  }
  public resetGwVipv4() {
    this._gwVipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwVipv4Input() {
    return this._gwVipv4;
  }

  // gw_vipv6 - computed: true, optional: true, required: false
  private _gwVipv6?: string; 
  public get gwVipv6() {
    return this.getStringAttribute('gw_vipv6');
  }
  public set gwVipv6(value: string) {
    this._gwVipv6 = value;
  }
  public resetGwVipv6() {
    this._gwVipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwVipv6Input() {
    return this._gwVipv6;
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

  // interdc_gw_id - computed: true, optional: true, required: false
  private _interdcGwId?: string; 
  public get interdcGwId() {
    return this.getStringAttribute('interdc_gw_id');
  }
  public set interdcGwId(value: string) {
    this._interdcGwId = value;
  }
  public resetInterdcGwId() {
    this._interdcGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interdcGwIdInput() {
    return this._interdcGwId;
  }

  // internet_gw_id - computed: true, optional: true, required: false
  private _internetGwId?: string; 
  public get internetGwId() {
    return this.getStringAttribute('internet_gw_id');
  }
  public set internetGwId(value: string) {
    this._internetGwId = value;
  }
  public resetInternetGwId() {
    this._internetGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGwIdInput() {
    return this._internetGwId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: number; 
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }
  public set netmask(value: number) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // primary_ipv4 - computed: true, optional: true, required: false
  private _primaryIpv4?: string; 
  public get primaryIpv4() {
    return this.getStringAttribute('primary_ipv4');
  }
  public set primaryIpv4(value: string) {
    this._primaryIpv4 = value;
  }
  public resetPrimaryIpv4() {
    this._primaryIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpv4Input() {
    return this._primaryIpv4;
  }

  // primary_ipv6 - computed: true, optional: true, required: false
  private _primaryIpv6?: string; 
  public get primaryIpv6() {
    return this.getStringAttribute('primary_ipv6');
  }
  public set primaryIpv6(value: string) {
    this._primaryIpv6 = value;
  }
  public resetPrimaryIpv6() {
    this._primaryIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpv6Input() {
    return this._primaryIpv6;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secondary_ipv4 - computed: true, optional: true, required: false
  private _secondaryIpv4?: string; 
  public get secondaryIpv4() {
    return this.getStringAttribute('secondary_ipv4');
  }
  public set secondaryIpv4(value: string) {
    this._secondaryIpv4 = value;
  }
  public resetSecondaryIpv4() {
    this._secondaryIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpv4Input() {
    return this._secondaryIpv4;
  }

  // secondary_ipv6 - computed: true, optional: true, required: false
  private _secondaryIpv6?: string; 
  public get secondaryIpv6() {
    return this.getStringAttribute('secondary_ipv6');
  }
  public set secondaryIpv6(value: string) {
    this._secondaryIpv6 = value;
  }
  public resetSecondaryIpv6() {
    this._secondaryIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpv6Input() {
    return this._secondaryIpv6;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // vpn_gw_id - computed: true, optional: true, required: false
  private _vpnGwId?: string; 
  public get vpnGwId() {
    return this.getStringAttribute('vpn_gw_id');
  }
  public set vpnGwId(value: string) {
    this._vpnGwId = value;
  }
  public resetVpnGwId() {
    this._vpnGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGwIdInput() {
    return this._vpnGwId;
  }

  // vrid - computed: true, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_gw_id: cdktf.stringToTerraform(this._awsGwId),
      azure_gw_id: cdktf.stringToTerraform(this._azureGwId),
      description: cdktf.stringToTerraform(this._description),
      gateway_interface_id: cdktf.stringToTerraform(this._gatewayInterfaceId),
      gcp_gw_id: cdktf.stringToTerraform(this._gcpGwId),
      gw_vipv4: cdktf.stringToTerraform(this._gwVipv4),
      gw_vipv6: cdktf.stringToTerraform(this._gwVipv6),
      id: cdktf.stringToTerraform(this._id),
      interdc_gw_id: cdktf.stringToTerraform(this._interdcGwId),
      internet_gw_id: cdktf.stringToTerraform(this._internetGwId),
      name: cdktf.stringToTerraform(this._name),
      netmask: cdktf.numberToTerraform(this._netmask),
      network_id: cdktf.stringToTerraform(this._networkId),
      primary_ipv4: cdktf.stringToTerraform(this._primaryIpv4),
      primary_ipv6: cdktf.stringToTerraform(this._primaryIpv6),
      region: cdktf.stringToTerraform(this._region),
      secondary_ipv4: cdktf.stringToTerraform(this._secondaryIpv4),
      secondary_ipv6: cdktf.stringToTerraform(this._secondaryIpv6),
      service_type: cdktf.stringToTerraform(this._serviceType),
      status: cdktf.stringToTerraform(this._status),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      vpn_gw_id: cdktf.stringToTerraform(this._vpnGwId),
      vrid: cdktf.numberToTerraform(this._vrid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_gw_id: {
        value: cdktf.stringToHclTerraform(this._awsGwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_gw_id: {
        value: cdktf.stringToHclTerraform(this._azureGwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_interface_id: {
        value: cdktf.stringToHclTerraform(this._gatewayInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_gw_id: {
        value: cdktf.stringToHclTerraform(this._gcpGwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_vipv4: {
        value: cdktf.stringToHclTerraform(this._gwVipv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_vipv6: {
        value: cdktf.stringToHclTerraform(this._gwVipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interdc_gw_id: {
        value: cdktf.stringToHclTerraform(this._interdcGwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_gw_id: {
        value: cdktf.stringToHclTerraform(this._internetGwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask: {
        value: cdktf.numberToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_ipv4: {
        value: cdktf.stringToHclTerraform(this._primaryIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_ipv6: {
        value: cdktf.stringToHclTerraform(this._primaryIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_ipv4: {
        value: cdktf.stringToHclTerraform(this._secondaryIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_ipv6: {
        value: cdktf.stringToHclTerraform(this._secondaryIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gw_id: {
        value: cdktf.stringToHclTerraform(this._vpnGwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
